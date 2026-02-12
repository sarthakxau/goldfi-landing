import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-bg border-t border-ink text-ink pt-16 pb-8 px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                <div className="col-span-1 md:col-span-2">
                    <div className="font-bold text-lg mb-6 leading-tight">
                        THE GOLD COMPANY<br />OF BOMBAY
                    </div>

                </div>

                <div>
                    <h4 className="font-bold uppercase mb-4 text-xs tracking-widest">Platform</h4>
                    <ul className="space-y-2 text-sm opacity-80">

                        <li><a href="#" className="hover:text-[#FF7722]">Digital Gold</a></li>
                        <li><a href="#" className="hover:text-[#FF7722]">Vault Audit</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold uppercase mb-4 text-xs tracking-widest">Company</h4>
                    <ul className="space-y-2 text-sm opacity-80">
                        <li><a href="#" className="hover:text-[#FF7722]">About Us</a></li>
                        <li><a href="#" className="hover:text-[#FF7722]">Contact</a></li>
                        <li><a href="#" className="hover:text-[#FF7722]">Legal & Privacy</a></li>
                        <li><a href="#" className="hover:text-[#FF7722]">Careers</a></li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-ink pt-8 flex flex-col md:flex-row justify-between items-end md:items-center gap-4 text-xs font-mono uppercase opacity-60">
                <div>
                    © 2026 The Gold Company of Bombay. All rights reserved.
                </div>
                <div className="flex gap-4">
                    <span className="hover:text-[#FF7722] cursor-pointer">Twitter</span>
                    <span className="hover:text-[#FF7722] cursor-pointer">Instagram</span>
                    <span className="hover:text-[#FF7722] cursor-pointer">LinkedIn</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
