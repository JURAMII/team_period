import './lineTit.css'

const LineTit = (props) =>{

    return(
        <div className='greenWrap'>
            <div className='greenLine calcWidth'>
            <p className='greenTit'>{props.subtit}</p>
            </div>
        </div>
    )
}

export default LineTit