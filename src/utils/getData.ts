import Cookies from "js-cookie";

interface Props{
    query: string,
    method?: 'GET' | 'POST' | 'DELETE' | 'PUT',
    data?: any
}

export const getData = ({query,method='GET',data={}}:Props) => {

        let options = {}
        switch (method.toUpperCase().trim()) {
            case 'GET':
                options = {
                    method: 'GET',
                    headers: {
                                'token': Cookies.get('token') || ''
                            }
                }
                break;
            default:
                options = {
                    method,
                    headers: {
                                'Content-type': 'application/json',
                                'token': Cookies.get('token') || ''
                            },
                    body: JSON.stringify(data) 
                }
                break;
        }
    // ${process.env.REACT_APP_URL_API}
    return fetch(`https://fakestoreapi.com/${query}`, );
}