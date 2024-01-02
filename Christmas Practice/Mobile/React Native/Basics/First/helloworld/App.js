import { View, Text, Image, ScrollView, Button } from 'react-native'
import logoImg from './assets/adaptive-icon.png'

const App = () => {
    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: 'plum' }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: "center", gap: 40, paddingTop: 50 }}>
                <View style={{borderRadius: 50, overflow: "hidden"}}>
                    <Image source={{ uri: "https://scontent.fcrk2-1.fna.fbcdn.net/v/t39.30808-6/399236992_2314976965372950_5007755673493563489_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=5rrKdaz2NsEAX8an72M&_nc_oc=AQmclcFB0eNfSPEYx1kgG1JORa_DdmGrBkcZ8nlLZCtD5ZKbM7U6cG38SRAbxle1VGNl-VWE9vd10jS1cR9_n_T_&_nc_ht=scontent.fcrk2-1.fna&oh=00_AfDWbFgtslP14iI8dU6m-p64u6o0-fpX5vjKqRAFiJnc-Q&oe=65998D27" }} style={{ width: 300, height: 300 }} />
                </View>
                <Text style={{fontSize: 40, fontWeight: 800}}>
                    Marc Edison
                </Text>

                <Text style={{ color: "white", textAlign: "justify", padding: 40 }}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi quidem voluptatum accusamus dicta enim, quod nobis. Suscipit inventore ab ut quaerat doloremque totam culpa, quod nam. Totam quibusdam nisi ipsa amet quo assumenda asperiores voluptas accusantium, et optio earum officia blanditiis, alias maxime cum consectetur vero pariatur nam itaque eum. Reprehenderit maiores porro, velit, vitae officiis accusamus veritatis, perspiciatis consequuntur suscipit labore ipsam? Molestias quibusdam sed maiores, quis explicabo recusandae assumenda? Dolor minus quidem numquam tempora sint voluptatum, fuga modi iusto in. Neque commodi qui autem. Alias earum reprehenderit voluptate explicabo suscipit illum esse iure atque deserunt omnis porro sequi facere sed a dolor rerum ut, labore perferendis? Voluptatibus dicta quod impedit veritatis sed blanditiis, non maiores quia aliquid voluptate libero enim omnis tenetur similique commodi perspiciatis sint at a excepturi magnam amet itaque cumque explicabo alias? Expedita animi iste omnis excepturi nemo asperiores itaque dolorem, iure quas, debitis unde earum cupiditate soluta, fugit nisi incidunt voluptatem inventore illum alias cum ducimus aut quae. Enim temporibus velit quia numquam perferendis, cum officiis. Asperiores illo nesciunt consequatur iusto maiores doloremque, veritatis culpa rem sequi exercitationem facilis in molestias similique incidunt velit tempore esse voluptatibus, accusamus cupiditate quisquam impedit voluptatum, saepe est doloribus. At sequi corporis optio asperiores voluptatum! Rerum dolores atque eum deserunt esse incidunt quasi, obcaecati voluptate sint maiores commodi magni natus provident, suscipit vero rem voluptas nisi! Deleniti error alias nesciunt cum optio praesentium quas esse odio iste, doloribus obcaecati facilis dolore hic! Odit assumenda nesciunt odio non eum! Blanditiis animi cum quas error vero, sed earum itaque enim numquam ipsa quod dolorum exercitationem, ab quidem nulla? Doloremque animi iusto quidem consequuntur, perspiciatis labore voluptatem eius, cupiditate, minima magni officiis hic nostrum. Alias modi error repudiandae mollitia sint tempora nihil quam sequi debitis, assumenda, eligendi amet rerum magnam minus!
                </Text>
                <Image source={logoImg} style={{ width: 300, height: 300 }} />
            </ScrollView>

        </View>
    )
}

export default App
