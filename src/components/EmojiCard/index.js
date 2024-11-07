import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onClickFunction} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onClickfunction = () => {
    onClickFunction(id)
  }
  return (
    <li className="emojiCard">
      <button className="emojiButton" onClick={onClickfunction}>
        <img className="emojiImage" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
