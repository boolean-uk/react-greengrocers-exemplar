import { storeItems, StoreItemTypes, SortTypes } from "../../store-items";
import StoreItems from "./StoreItems";
import { useState } from "react";

function Store(props) {
  const [sortType, setSortType] = useState(SortTypes.ByPrice);

  //Rather than separate state for each filter, store the filter
  //values as an object. Each key represents the filter type and
  //the value a boolean that indicates if that filter is on or not:
  //
  // {
  //  "veg" : true,
  //  "fruit" : false,
  // }
  //
  //Use the constants in StoreItemTypes as the keys so we don't need
  //to repeat the string literals everywhere.
  //
  //This approach vs separate state values means that we can just have
  //a single toggleFilter function for all filter types and also that
  //the filter code itself can just lookup the items type in the state
  //object rather than having to use if/else to check.
  const [filters, setFilters] = useState({
    [StoreItemTypes.Veg]: true,
    [StoreItemTypes.Fruit]: true,
  });

  const toggleFilter = (type) => {
    ///Toggles filter for the provided StoreItemType
    //
    //This copies the filters object (using ...) but then
    //overrides the key specified by type, setting the value to
    //the opposite of what it previously was.
    setFilters({ ...filters, [type]: !filters[type] });
  };

  //Store the sort functions on an object keyed by the sort type.
  //
  //Similar to the approach with filters, this means that to apply
  //the sort we can just lookup the sort function from this object
  //using the square bracket syntax rather than having to use
  //if else.
  const sortFunctions = {
    [SortTypes.ByPrice]: (a, b) => b.price - a.price,
    [SortTypes.ByName]: (a, b) => a.name.localeCompare(b.name),
  };

  //Filter the items - only include items that should be show
  //according to the filters state object. Lookup the boolean value
  //in the state object for this item type.
  const filteredStoreItems = storeItems.filter(
    (storeItem) => filters[storeItem.type]
  );

  //Sort the items - look up the sort function from the sortFunctions
  //object based on the currently specified sortType.
  filteredStoreItems.sort(sortFunctions[sortType]);

  return (
    <header id="store">
      <h1>Greengrocers Store</h1>
      <div className="store--options">
        <label>
          Sort by&nbsp;
          <select
            onChange={(e) => setSortType(e.target.value)}
            value={sortType}
          >
            <option value={SortTypes.ByPrice}>Price</option>
            <option value={SortTypes.ByName}>Name</option>
          </select>
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters[StoreItemTypes.Fruit]}
            onChange={() => toggleFilter(StoreItemTypes.Fruit)}
          />
          Show Fruit
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters[StoreItemTypes.Veg]}
            onChange={() => toggleFilter(StoreItemTypes.Veg)}
          />
          Show Vegetables
        </label>
      </div>
      <StoreItems
        storeItems={filteredStoreItems}
        addItemToCart={props.addItemToCart}
      />
    </header>
  );
}

export default Store;
