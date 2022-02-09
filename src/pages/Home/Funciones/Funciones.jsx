const url = "https://proyecto-final-api-mocha.vercel.app/api/noticias/"

export const getNoticiaById = async (id) => {

    const res = await fetch(`${url}${id}`);
    if (res.ok) {
        
        return res.json();

    } else {

        return [];

    }

};