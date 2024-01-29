export const passwordGeneration = (len) => {
    const chars = 'abdehkmnpswxzABDEFGHKMNPQRSTWXZ123456789.@%$#№!()_-<>/;:';
    let str = '';
    for (let i = 0; i < len; i++) {
        let pos = Math.floor(Math.random() * chars.length);
        str += chars.substring(pos,pos+1);
    }
    return str;
}