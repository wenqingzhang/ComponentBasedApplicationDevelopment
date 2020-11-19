import React from 'react';

const InputCommand: React.FC<{
    name: string,
    type: 'submit' | 'reset',
    onExecute?: (v: any) => void
}> = ({name, type, onExecute}) => {
    return (
        <div>
            <input
                id={name}
                type={type || 'submit'}
                value={name}
                onClick={(evt) => onExecute?.call(null, evt.target)}
            />
        </div>
    );
}

export default InputCommand;
