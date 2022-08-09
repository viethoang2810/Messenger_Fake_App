import classNames from 'classnames/bind';
import styles from './Button.module.scss';
const cx = classNames.bind(styles);

function Button({primary,children, ...passProps}) {
    let Comp = 'button';
    const classes = cx('wrapper',{
        primary,
    })
    return ( 
        <Comp className={classes} {...passProps}>
            {children}
        </Comp>
        
    );
}

export default Button;