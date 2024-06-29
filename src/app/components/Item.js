import react from 'react'
import {Col, Panel } from 'react-bootstrap';

{/* How the items are to appear in the shopping section */}


function Item(props){
    let {
        product
    } = props;


return (
    <Col
    lg={3}
    md={4}
    sm={6}>

    <Panel className="product">
        <div className="product-img-wrapper">
            <a href="#">
                <img
                alt={product.name}
                className="img-responsive product-img"
                src={product.picture} />
                </a>        
        </div>

        <h4 
        className="ellipses product-brand-name"
        title={product.name}>
            <a href="#">
                {product.name}
            </a>
        </h4>

        <h5 
            className="ellipses product-brand-name"
            title={product.brand.name}>
                {`${product.price}$`}
            </h5>

        <div clsasName="pull-right h4 product price">
            {`$product.price}$`}
        </div>

        </Panel>
    </Col>
);
}

Product.propTypes = {
    product: React.propTypes.object.isRequired
};

export default Item;
