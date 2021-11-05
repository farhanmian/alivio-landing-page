import { Typography, makeStyles } from '@material-ui/core';
import cssClasses from '../../../../styles/Steps.module.css';
import Image from 'next/image';
import img1 from '../../../../public/img/box1.png';
import img2 from '../../../../public/img/box2.png';
import img3 from '../../../../public/img/box3.png';
import { Fragment } from 'react';

const boxData = [
    {
        bgText: '01',
        heading: 'Personalize',
        text: 'Answer a quick survey about how you express yourself, what causes you stress, and what area would you like to work on. This way, we can fully personalize your journal!',
        img: img1
    },
    {
        bgText: '02',
        heading: 'Write & Understand',
        text: 'Write, draw, reflect, understand. Alivio will guide you through the prompts and will help you manage your stress!',
        img: img2
    },
    {
        bgText: '03',
        heading: 'Alivio!',
        text: 'Now you are aware, and have a way to manage and overcome your own stress. What are you waiting for? Alivio today!',
        img: img3,
        editBgText: true,
    },
];


const useStyles = makeStyles({
    boxHeading: {
        position: 'absolute',
        right: 0,
        top: 135,
    },
    bgText: {
        position: 'absolute',
        color: '#01996D33',
        left: 0,
        height: '100%',
        fontFamily: 'Domine'
    },
    textPra0: {
        marginBottom: 60
    },
    textPra1: {
        marginBottom: 36
    },
    textPra2: {
        marginBottom: 48
    },
})


const Boxes = () => {
    const classes = useStyles();

    return (
        <div className={cssClasses.boxContainer}>
            {
                boxData.map((box, i) => {
                    return <div className={`${cssClasses.box} ${cssClasses['box' + i]}`}>

                        <div className={cssClasses['boxHeadingContainer' + i]}>
                            <Typography className={`${classes.bgText} ${cssClasses['bgText' + i]}`} variant="h6">
                                {box.editBgText ? <Fragment> {box.bgText.slice(0, 1)} <span>{box.bgText.slice(1, 2)}</span> </Fragment> : box.bgText}
                            </Typography>
                            <Typography className={` ${classes.boxHeading} ${cssClasses['boxHeading' + i]}`} variant="h4">
                                {box.heading}
                            </Typography>
                        </div>

                        <Typography className={classes['textPra' + i]} variant="body2">
                            {box.text}
                        </Typography>

                        <Image className={cssClasses.boxImg} src={box.img} alt="img" />

                    </div>
                })
            }
        </div>
    )
}


export default Boxes;