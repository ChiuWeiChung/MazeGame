import './Footer.scss';
import typescriptLogo from '../../img/typescript.png';

function footer():JSX.Element {
    return (
        <div className="footer">
            <h2 className="footer__title">&copy; Designed by <i className="fab fa-github"></i>
                <a href="https://github.com/ChiuWeiChung"> Rick Chiu</a>
            </h2>
            <div className="footer__utilities">
                <p><i className="fab fa-react"></i> React with Redux</p>
                <p><img src={typescriptLogo} alt="" style={{width:'20%'}} /> TypeScript </p>
                <p><i className="fab fa-font-awesome-flag"></i> FontAwesome </p>
            </div>
        </div>
    )
}

export default footer