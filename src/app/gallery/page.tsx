import { Card, Container, Grid } from '@mui/material';
import Link from 'next/link';

export default function Page() {
  let photos = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <Container content="section" sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {photos.map((id) => (
          <Grid item xs={12} sm={6} md={4} key={id}>
            <Link href={`gallery/photos/${id}`} passHref>
              <Card>
                {id}
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
