import React from 'react';

import data from '../../settings/contact';

export const ContactIcons = () => (
  <div className='grid grid-cols-5 pt-10'>
    {data.map((s) => (
      <li key={s.label}>
        <a href={s.link}>
            {s.icon}
        </a>
      </li>
    ))}
  </div>
);
