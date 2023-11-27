import React from "react";
import { useState, useEffect } from "react";
import '../../css/vocaCard.css';

export default function VocaPage(){
    // const [voca, setVoca] = useState([]);

    // const getData=()=>{
    //     fetch('./data/dummyChinese.json')
    //     .then((res) => res.json())
    //     .then((data)=>{
    //         console.log(data);
    //         setVoca(data);
    //     })}

    //   useEffect(()=>{
    //     getData()
    //   },[])

        const [voca, setVoca] = useState([]);
    
        const getData = async () => {
            try {
                const response = await fetch('./data/dummyChinese.json');
                const data = await response.json();
                console.log(data);
                setVoca(data);
            } catch (error) {
                console.error('어 패치 실패했어~', error);
            }
        }
    
        useEffect(() => {
            getData();
        }, []);

    return (
        <>
            <div className="card">
                <div className="con card_top">
                {voca ? <span className="word">{voca[0]?.word}</span> : null}
                <span className="word to_modal">&middot;&middot;&middot;</span>
                </div>
                {voca ? <span className="con pronunciation">&#91;{voca[0]?.pronunciation}&#93;</span> : null}
                {voca ? <span className="con meaning">{voca[0]?.meaning}</span> : null}
            </div>
        </>
    )
}