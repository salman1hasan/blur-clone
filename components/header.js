import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useAccount, useConnect } from 'wagmi';
import { Search } from '@web3uikit/icons';
import styles from '@/styles/Home.module.css';
import Logo from '../public/assets/blurLogo.png';

export default function Header() {
  const { address, isConnected } = useAccount();
}

