import React from 'react'
import { Button, Container, Menu } from 'semantic-ui-react'
import Language from './Language'

export default function Navi() {
    return (
        <div>
            <Menu inverted fixed="top">
                <Container>
                    <Menu.Item
                        name='Anasayfa'
                    />
                    <Menu.Item
                        name="iş ilanları"
                    />

                    <Menu.Menu position='right'>
                        <Language/>
                        <Menu.Item>
                            <Button primary>Giriş Yap</Button>
                            <Button primary>Kayıt Ol</Button>
                        </Menu.Item>

                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}