import React, {useEffect, useState} from 'react';
import { animationCreate } from "../../utils/utils";
import ScrollToTop from "react-scroll-to-top";
import { FaAngleUp } from 'react-icons/fa';
import Head from "next/head";
import dynamic from 'next/dynamic';

const DynamicScrollToTop = dynamic(() => import("react-scroll-to-top"), {
  ssr: false
});

function MyApp({ Component, pageProps }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        setTimeout(() => {
          animationCreate();
        }, 500);
      }, []);

    if (!mounted) {
        return null;
    }

    return (
        <>
          <Head>
                
            </Head>
            <div className="page-wrapper">
              <Component {...pageProps} />
            </div>
            <DynamicScrollToTop className="scroll-to-top" smooth component={<FaAngleUp />}  />
        </>
    );
}

export default MyApp;