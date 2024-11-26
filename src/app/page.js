'use client';

import { Theme } from '@chakra-ui/react'; // Chakra UI의 useTheme 훅을 import
import Todo from '@/components/Todo';

export default function Home() {
    return (
        <div className={Theme ? Theme.background : 'default-background'}>
            <Todo />
        </div>
    );
}
