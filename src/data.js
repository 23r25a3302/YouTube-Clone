// export const API_KEY = 'AIzaSyCPwOLakBE5PTbO27GsZICHXn5zi8gRno4';
export const API_KEY = 'AIzaSyCXQ3dtCxTqesgaX-h45ifCgLgIQ3K_B90';

export const value_converter = (value) => {
    if(value >= 1000000) {
        return Math.floor(value/1000000) + "M";
    } else if (value >= 1000) {
        return Math.floor(value/1000) + "K";
    } else {
        return value;
    }
}