import { ethers } from 'ethers';
import { NFTContract } from './contracts/NFTContract.json';

const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545');
const signer = provider.getSigner();
const contract = new ethers.Contract(NFTContract.address, NFTContract.abi, signer);

async function buyNFT(tokenId, price) {
  const tx = await contract.purchase(tokenId, { value: ethers.utils.parseEther(price.toString()) });
  await tx.wait();
  return tx.hash;
}
