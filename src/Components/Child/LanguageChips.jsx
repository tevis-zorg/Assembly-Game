const LanguageChips = (props) => {

    const listData = props.arrData;

    
    
    const chipElement = listData.map(
        (items, index) => {
            
            const ceased = index < props.wrongGuess

            const style = {
                backgroundColor: items.backgroundColor,
                color: items.color
                }

            console.log(ceased)
                
            const chipLost = props.moduleName(
                'chips', ceased && 'lost'
            )

            return (

                <span
                key={items.name}
                className={chipLost}
                style={style}
                >
                {items.name}
                </span>

            )
            
        }
    )

  return (
    <section className="language-chips">

        {
            chipElement
        }

    </section>
  )
}

export default LanguageChips;
