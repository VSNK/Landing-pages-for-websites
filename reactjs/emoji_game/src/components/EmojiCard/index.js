// Write your code here.
import './index.css'

export default props => {
  const {emojiName, emojiUrl, emojiId, onEmojiSelect} = props
  return (
    <li onClick={() => onEmojiSelect(emojiId)} className="emojis-list-item">
      <img alt={emojiName} className="emoji-image" src={emojiUrl} />
    </li>
  )
}
