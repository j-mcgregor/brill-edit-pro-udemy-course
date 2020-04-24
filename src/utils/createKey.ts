export default (value: string, index: number) =>
    `${value.replace(/[^0-9a-zA-Z]+/, '')}-${index}`
