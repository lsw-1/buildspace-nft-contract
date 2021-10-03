const main = async () => {
  const nftContractFactory = await hre.ethers.getContractFactory("MyEpicNFT");
  const nftContract = await nftContractFactory.deploy();
  await nftContract.deployed();

  console.log("contract deployed", nftContract.address);

  let txn = await nftContract.makeAnEpicNFT();
  await txn.wait();

  txn = await nftContract.makeAnEpicNFT();
  await txn.wait();

  const amount = await nftContract.getAmountMinted();
  console.log(amount.toNumber());
};

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.log(e);
    process.exit(1);
  });
