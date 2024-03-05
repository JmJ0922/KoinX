import React from 'react';
import './Team.css';
import image from './image.svg';
import image2 from './image2.svg';
import image3 from './image3.svg';

const TeamMember = ({ name, imageSrc, description }) => (
  <div className='people'>
    <div>
      <img src={imageSrc} width="96.35px" height="104.81px" alt={name} />
    </div>
    <div>
      <p>{description}</p>
    </div>
  </div>
);

const Team = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      imageSrc: image,
      description: 'Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu',
    },
    {
      name: 'Jane Smith',
      imageSrc: image2,
      description: 'Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu',
    },
    {
      name: 'Emily Johnson',
      imageSrc: image3,
      description: 'Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu',
    },
  ];

  return (
    <div className='team'>
      <div className='items'>
        <h3>Team</h3>
        <p className='start'>
          Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
          nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
          quam. Facilisis purus convallis quam augue.
        </p>
        <div>
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              imageSrc={member.imageSrc}
              description={member.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
