
'use client'

import { useEffect, useState } from 'react';
import TextLink from '../ui/TextLink';
import HoverRevealText from '../utility/HoverRevealText';
import { AnimatePresence, motion, Variants } from 'framer-motion';


export default function FeatureCodeView({ feat }) {

    const [codeShow, setCodeShow] = useState(false);
    const [featId, setFeatId] = useState(null);

    useEffect(()=> {
        setCodeShow(false);
        setFeatId(null);
    },[feat.id])

    function handleCodeShow() {
        if (feat.id === featId && codeShow) {
            setCodeShow(false);
            setFeatId(null); 
        }
        else {
            setCodeShow(true);
            setFeatId(feat.id); 
        }
    };

    const codeViewVariants: Variants = {
        initial: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { ease: 'backInOut', duration: 1 },
        },
        exit: { opacity: 0 },
    };

    const codeView =  <TextLink content="CodeView" iconName={ codeShow ? 'arrowUp' : 'arrowDown'} iconSize={20}/>

    return (
        <>
            {
                feat.codeView &&
                <div className='relative cursor-pointer' onClick={ handleCodeShow }>
                    <HoverRevealText hoverContent={codeView}>
                        {codeView}
                    </HoverRevealText>
                    <AnimatePresence>
                    {
                        feat.id === featId && codeShow &&
                        <motion.div 
                            className='absolute z-50 w-full' 
                            variants={codeViewVariants}
                            initial="initial"       
                            animate="visible"
                            exit="exit">
                            <iframe
                            src={feat.codeView.src}
                            style={{width: '100%', height: '100vh'}}
                            sandbox="allow-scripts allow-same-origin">
                            </iframe>
                        </motion.div>
                    }
                    </AnimatePresence>
                </div>
            }
        </>
    )
}