import React from 'react';

// import '../../css/cu_card.css';

import {
    Div_wrap,
    Header,
    Logo,
    LogoImg,
    Event,
    EventImg,
    EventSpan,
    Content,
    Product,
    ProductImg,
    Footer,
    FooterTitle,
    FooterStar,
    FooterPrice,
} from './Styeld';

const Cu = () => {
    return (
        <Div_wrap>
            {/* 상단 로고 행사 안내 */}
            <Header>
                <Logo>
                    <LogoImg src='./image/logo_cu.png' title='store logo cu' />
                </Logo>
                <Event>
                    <EventImg>
                        <EventSpan>1+1</EventSpan>
                    </EventImg>
                </Event>
            </Header>

            {/* 제품 */}
            <Content>
                <Product>
                    <ProductImg src='./image/cu_product.jpg' title='store product image' />
                </Product>
            </Content>

            {/* 제품설명 */}
            <Footer>
                <FooterTitle>롯데푸드)요구하이 145ml</FooterTitle>
                <FooterStar>[별점]</FooterStar>
                <FooterPrice>1,000원</FooterPrice>
            </Footer>
        </Div_wrap>
    );
}

export default Cu;