import styles from "./EmojiPanel.module.scss"

interface I_EmojiPanel {
    setTextareaValue:React.Dispatch<React.SetStateAction<string>>;
}

function EmojiPanel({setTextareaValue}:I_EmojiPanel) {
    const emojiArray = ["✌","😂","😝","😁","😱","👉","🙌","🍻","🔥","🌈","☀","🎈","🌹","💄","🎀","⚽","🎾","🏁","😡","👿","🙈","🐻","🐶","🐬","🐟","🍀","👀","🚗","🍎","💝","💙","👌","❤","😍","😉","😓","😳","💪","💩","🍸","🔑","💖","🌟","🎉","🌺","🎶","👠","🏈","⚾","🏆","👽","💀","🐵","🐮","🐩","🐎","💣","👃","👂","🍓","💘","💜","👊","💋","😘","😜","😵","🙏","👋","🚽","💃","💎","🚀","🌙","🎁","⛄","🌊","⛵","🏀","🎱","💰","👶","👸","🐰","🐷","🐍","🐫","🔫","👄","🚲","🍉","💛","💚","😸","😹","😺","😿","😷","😠","😢","😑","🙃","🦐","🦖","🦕","🦎","🦄","🤡","💪"]


    const handleEmojiIntoTextArea = (event:React.MouseEvent<HTMLDivElement>):void => {
        const emoji = (event.target as HTMLDivElement).textContent
        setTextareaValue((prev : string) => prev + emoji);
    }

    return (
    <div className={styles.emojiPanel}>
        <div className={styles.emojiPanel_wrapper}>
            <div className={styles.emojiPanel_container}>
                {emojiArray.map((emoji,i)=> <div key={i} onClick={handleEmojiIntoTextArea}>{emoji}</div>)}
            </div>
        </div>
    </div>
    )
}

export default EmojiPanel