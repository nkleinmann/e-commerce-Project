import './form-input.styles.scss'

const FormInput = ({ label, ...otherProps }) => {
    return (
        <div className='group'>
            {/* if label exists, then render this label */}
            {/* className on label uses ternary operator that says if value has a length, apend 'shrink' class otherwise do nothing */}
            <input className='form-input' {...otherProps} />
            {label && (
                <label 
                    className={`
                     ${otherProps.value.length ? 'shrink' : ''} form-input-label
                     `}
                >
                        {label}
                </label>
            )}
        </div>
    )
}

export default FormInput