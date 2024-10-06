import './heading.css'

function Heading(props) {
  return (
    <div class="heading-container">
      <div class="heading-styling">{props.text}</div>
    </div>
  )
}

export default Heading
