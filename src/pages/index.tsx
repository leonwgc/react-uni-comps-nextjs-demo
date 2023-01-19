import { useRouter } from 'next/router';
import { Slide, styled, Button, AutoCenter } from 'react-uni-comps';

const StyledCard = styled.div`
  height: 200px;
  background-size: 100%;
  background-position: center;
`;

const images = [
  'https://t7.baidu.com/it/u=1605309380,911023805&fm=193&f=GIF',
  'https://t7.baidu.com/it/u=3444349230,194273721&fm=193&f=GIF',
  'https://t7.baidu.com/it/u=3889655668,2711219959&fm=193&f=GIF',
  'https://t7.baidu.com/it/u=2808499218,4024510450&fm=193&f=GIF',
];

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <Slide autoPlay interval={2000}>
        {images.map((item, index) => (
          <StyledCard
            key={index}
            style={{ backgroundImage: `url(${item})` }}
          ></StyledCard>
        ))}
      </Slide>

      <AutoCenter style={{ marginTop: 20 }}>
        <Button type="primary" onClick={() => router.push('/form')}>
          goto form page
        </Button>
      </AutoCenter>
    </div>
  );
}
