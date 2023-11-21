const Input = ({richText, ...props}) =>{    
    return(

        <> 
            {
              

                richText ?  <textarea placeholder = {props.placeholder} />:
                <input type = {props.input} placeholder = {props.placeholder} />
            }
       
       </>
    )
}

export default Input;    