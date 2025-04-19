'use client';
import { UserContext } from '../components/UserContext';
import { useContext } from 'react';
import Image from 'next/image';

import visa from '../../public/assets/visa.jpeg';
import { MdAssignment } from 'react-icons/md';
import Link from 'next/link';

export default function page() {
  const { user } = useContext(UserContext);
  return (
    <main>
      {/* bento box dashboard */}
      <div>
        {/* user requested resource guide */}
        <div>
          <div>
            <h2>
              <MdAssignment /> Start Your Student Visa Application
            </h2>
            <Link href='/resources/student-visa'></Link>
          </div>
        </div>
      </div>
    </main>
  );
}
