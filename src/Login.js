import { createElement } from './utils';

// shows the log in info
// when the user is logged in, they can see their favorite recipes and also add recipes to the existent lists.
function Login() {
    const title = createElement('h2', { textContent: 'Log in' });
    const explanation = createElement('p', {textContent: 'Log in to see your favorite recipes and add new ones!'});
    
}

export default Login;