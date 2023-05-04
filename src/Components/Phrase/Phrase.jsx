import './Phrase.css'

const Phrase = ({phrase}) => {
  return (
    <section className='phrase__container'>
        <p>{phrase}</p>
    </section>
  )
}

export default Phrase