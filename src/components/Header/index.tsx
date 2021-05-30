import React from 'react';

type OtherProps = {
    name: string;
    color: string;
};

export const Header: React.FC<OtherProps> = ({ name, color }: OtherProps) => (
    <h1
        style={{
            color: color,
        }}
    >
        {name}
    </h1>
);
