import React from 'react';
import { Star, Heart, Sparkles, Clock, Sun, Moon } from 'lucide-react';

interface IconProps {
    type: 'star' | 'heart' | 'sparkles' | 'clock' | 'sun' | 'moon';
    className?: string;
}

export const Icon: React.FC<IconProps> = ({ type, className = "w-6 h-6" }) => {
    switch (type) {
        case 'star': return <Star className={className} />;
        case 'heart': return <Heart className={className} />;
        case 'sparkles': return <Sparkles className={className} />;
        case 'clock': return <Clock className={className} />;
        case 'sun': return <Sun className={className} />;
        case 'moon': return <Moon className={className} />;
        default: return <Sparkles className={className} />;
    }
};
