import React from 'react';
import { useTelegram } from '../../hooks/useTelegram';
import { Button } from '../Button/Button';

export const Header = () => {
    const {onClose,  user} = useTelegram()

  return (
    <div className={'header'}>

        <Button onClick={onClose}>баттон</Button>
        <span className='username'>{user}</span>
    </div>
  )
}

