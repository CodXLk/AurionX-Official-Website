"use client";

import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "94704335555"; // +94 704 335 555
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export default function WhatsAppButton() {
    return (
        <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-lg flex items-center justify-center bg-[#25D366] hover:bg-[#1ebe5d] transition-colors animate-bounce"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.3 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            {/* Official WhatsApp SVG icon */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-8 h-8 fill-white"
                aria-hidden="true"
            >
                <path d="M16 2C8.268 2 2 8.268 2 16c0 2.49.648 4.832 1.783 6.865L2 30l7.34-1.922A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.54 11.54 0 0 1-5.883-1.606l-.421-.25-4.355 1.14 1.16-4.232-.274-.436A11.56 11.56 0 0 1 4.4 16C4.4 9.592 9.592 4.4 16 4.4c6.408 0 11.6 5.192 11.6 11.6 0 6.408-5.192 11.6-11.6 11.6zm6.36-8.684c-.35-.175-2.07-1.02-2.39-1.137-.32-.116-.553-.175-.786.175-.232.35-.9 1.137-1.103 1.37-.203.232-.407.262-.757.087-.35-.175-1.477-.544-2.813-1.735-1.04-.927-1.742-2.072-1.946-2.422-.203-.35-.022-.54.153-.714.157-.157.35-.41.524-.613.175-.204.233-.35.35-.583.116-.233.058-.437-.029-.613-.087-.175-.786-1.894-1.077-2.594-.283-.68-.572-.588-.786-.598l-.67-.012c-.233 0-.612.087-.932.437-.32.35-1.223 1.195-1.223 2.914s1.252 3.38 1.427 3.613c.175.233 2.464 3.763 5.97 5.277.835.36 1.487.576 1.995.737.838.267 1.6.229 2.203.139.672-.1 2.07-.846 2.362-1.663.29-.816.29-1.516.203-1.663-.086-.146-.32-.233-.67-.408z" />
            </svg>
        </motion.a>
    );
}
