import { Title, Subtitle } from '../Typografy';

export default function ProjectCard(props) {
  return (
    <>
      <section className="py-6">
        <div className="w-full p-3">
          <img
            className="w-full h-full object-cover"
            src="/images/projects/spread.png"
            alt="spread-project"
          />
        </div>

        <Title small>Spread Software</Title>
        <Subtitle small>
          It's the best transcription platform ever. The platform allows you to
          take a video and transform to text. You can change the text at real
          time when you see the video. we use typescript, react and firebase
        </Subtitle>
      </section>
    </>
  );
}
