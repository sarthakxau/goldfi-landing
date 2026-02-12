import { useState, useEffect } from 'react';

const useLivePrices = () => {
    const [prices, setPrices] = useState({
        gold: null,
        silver: null,
        loading: true,
        error: null,
        lastUpdated: null
    });

    useEffect(() => {
        const fetchPrices = async () => {
            try {
                // GoldPrice.org API returns price per Ounce in INR
                const response = await fetch('https://data-asg.goldprice.org/dbXRates/INR');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();

                if (data.items && data.items.length > 0) {
                    const item = data.items[0];
                    // 1 Troy Ounce = 31.1034768 grams
                    const OUNCE_TO_GRAM = 31.1034768;

                    const goldPricePerGram = item.xauPrice / OUNCE_TO_GRAM;
                    const silverPricePerGram = item.xagPrice / OUNCE_TO_GRAM;

                    setPrices({
                        gold: goldPricePerGram,
                        silver: silverPricePerGram,
                        goldChange: item.chgXau,
                        silverChange: item.chgXag,
                        goldPctChange: item.pcXau,
                        silverPctChange: item.pcXag,
                        loading: false,
                        error: null,
                        lastUpdated: Date.now()
                    });
                }
            } catch (error) {
                console.error('Error fetching gold prices:', error);
                setPrices(prev => ({ ...prev, loading: false, error: error.message }));
            }
        };

        fetchPrices();
        // Refresh every 30 seconds
        const interval = setInterval(fetchPrices, 30000);
        return () => clearInterval(interval);
    }, []);

    return prices;
};

export default useLivePrices;
