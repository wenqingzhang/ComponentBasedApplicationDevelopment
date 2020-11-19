import React from 'react';

const InputField: React.FC<{
    name: string,
    type: 'text' | 'password',
    error?: string,
    onValidate?: (t: any, v: any) => boolean
}> = ({name, type, error, onValidate}) => {
    const [valid, setValid] = React.useState<boolean | undefined>();
    return (
        <div>
            <label>{name}</label>
            <br/>
            <input
                id={name}
                name={name}
                type={type || 'text'}
                onChange={(evt) => {
                    const x = onValidate?.call(null, evt.target, evt.target.value);
                    return setValid(x);
                }}
            />
            {valid && <div style={{color: "red"}}>{error || 'Something went wrong'}</div>}
        </div>
    );
}

export default InputField;
