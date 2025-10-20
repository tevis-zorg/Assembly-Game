const LanguageChips = (props) => {

  const listData = props.arrData;

  return (
    <section className="language-chips">

        {
            listData && listData.map(
                (items) => (

                        <span
                        className="chips"
                        key={items.name}
                        style={
                                {
                                    backgroundColor: items.backgroundColor,
                                    color: items.color
                                }
                            }   
                        >
                        {items.name}
                        </span>

                )
            )
        }

    </section>
  )
}

export default LanguageChips;
