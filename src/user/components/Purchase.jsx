function Purchase() {
  return (
    <div className="p-10 my-15 shadow rounded">
      {/* duplicate book */}
      <div className="p-5 rounded mt-4 bg-blue-100">
        <div className="md:grid grid-cols-[3fr_1fr]">
          <div className="px-4">
            <h1 className="text-2xl">Title</h1>
            <h2 className="text-xl">Author</h2>
            <h3 className="text-lg text-blue-700">$ Discount price</h3>
            <p className="text-justify">Abstract</p>
            {/* status image */}
            <div className="flex my-3">
              <img
                width={"120px"}
                height={"120px"}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ1T9cCWZRBwdOr_MWI9se7k_evLxhooGeeT4kvUbjqobVmYG7RBi8Md8W&s=10"
                alt="Pending"
              />
            </div>
          </div>
          <div className="px-4 mt-4 md:mt-0">
            <img
              className="w-full"
              src="https://design-assets.adobeprojectm.com/content/download/express/public/urn:aaid:sc:VA6C2:3e3ba26d-9171-5f00-abe5-35f3f14bf7ff/component?assetType=TEMPLATE&etag=47c27ec021494722832eddd8ed951d28&revision=6829c43e-8630-49c2-a9a6-9ec31faeaadd&component_id=0aea302f-8979-418e-803c-d8c9474c931c"
              alt="Book"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Purchase;
