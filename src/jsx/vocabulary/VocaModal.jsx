import React from "react";
// import { useState, useEffect } from "react";
// import '../../css/vocaModal.css';
import {Modal, TitleExit, TopCon, Btns, Btn} from '../../css/VocaModal';

export default function VocaModal( { lang, clickedWord, word, onClose, onDelete } ){

    // const [voca, setVoca] = useState([]);
    console.log(word, "vocamodal");
    console.log(lang, "lang in vocamodal");
    console.log(`localhost:8070/${lang.lang}/${word.id}`);

const handleDelete = async () => {
    try {
        await fetch(`localhost:8070/${lang.lang}/${word.id}`, {
            method: 'DELETE',
        });
        onDelete(word.id); 
        onClose(); 
        console.log("아 성공이죠?");
    } catch (error) {
        console.error('Failed to delete:', error);
        console.log("아 에러낫죠?");
    }
};

    return (
        <>
            <Modal>
                <TitleExit>
                    <TopCon className="word">{word.word}</TopCon>
                    <TopCon className="exit" onClick={(e)=>{
                        console.log("모달창 껐어용");
                        onClose();
                    }}
                    >X</TopCon>
                </TitleExit>
                <Btns>
                    <Btn>수정</Btn>
                    <Btn onClick={handleDelete}>삭제</Btn>
                </Btns>
            </Modal>
        </>
    )
}