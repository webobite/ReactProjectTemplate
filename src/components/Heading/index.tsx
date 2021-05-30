import React from 'react';

interface Props {
    name: string;
    color: string;
}

export function Heading({ name, color }: Props): React.ReactElement {
    return <h1 style={{ color: color }}>{name}</h1>;
}
