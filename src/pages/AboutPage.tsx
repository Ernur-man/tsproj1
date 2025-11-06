import '../less/about.less'
import { HiDocumentText } from 'react-icons/hi';
import { FaRecycle } from 'react-icons/fa';
import { FaMessage } from 'react-icons/fa6';
import { useState } from 'react';
import { FaBoxOpen } from 'react-icons/fa6';

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    index: number;
    isActive: boolean;
    onClick: () => void;
}

function FeatureCard({ icon, title, description, index, isActive, onClick }: FeatureCardProps) {
    const animationClass = index % 2 === 0 ? 'animate__fadeInDown' : 'animate__fadeInUp';
    
    return (
        <div 
            className={`feature-card square animate__animated ${animationClass} wow ${isActive ? 'active' : ''}`}
            onClick={onClick}
        >
            <div className="icon-wrapper">
                {icon}
            </div>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    );
}

export default function AboutPage() {
    const [activeCard, setActiveCard] = useState<number | null>(null);

    const features = [
        {
            icon: <HiDocumentText />,
            title: "Well Documentation",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim accusamus possimus in rem fugit quis?"
        },
        {
            icon: <FaMessage />,
            title: "Live Support",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim accusamus possimus in rem fugit quis?"
        },
        {
            icon: <FaBoxOpen/>,
            title: "Free Resource",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim accusamus possimus in rem fugit quis?"
        },
        {
            icon: <FaRecycle />,
            title: "Regular Update",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim accusamus possimus in rem fugit quis?"
        }
    ];

    const handleCardClick = (index: number) => {
        setActiveCard(activeCard === index ? null : index);
    };

    return (
        <main className="about" id="advantages">
            <div className="container">
                <h2 className="square animate__animated animate__fadeInDownBig wow">
                    Why Choose Us
                </h2>
                <article>
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                            index={index}
                            isActive={activeCard === index}
                            onClick={() => handleCardClick(index)}
                        />
                    ))}
                </article>
            </div>
        </main>
    );
}