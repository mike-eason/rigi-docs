<template>
<div>
<h1 class="uk-heading-primary">StockWise</h1>
<p>StockWise is designed to allow warehouse managers and staff to manage stock items on a mobile device. Stock counts, 
    stock checks, item edits &amp; Purchase order management can be handled right on the warehouse floor using a simple, 
    intuitive interface tailored to smaller screens. Available on phones, tablets &amp; Android scan guns, the main goal of StockWise 
    is to give users the flexibility to manage their stock items, without having to use a full desktop interface.</p>

<div id="searchingandscanning"></div>

<hr class="uk-margin-large">

<div>
    <h2>Searching and Scanning</h2>
    <p>Use the search bar to find an item or click on the <b>Scan</b> button to scan a barcode using the device's camera.</p>
    <p>Select keyword to search by stock item SKU, title, or barcode.</p>
    <p>Select <b>Bin/Rack</b> to search through your Bin/Rack numbers. StockWise will return all stock items that belong in that location.</p>
    <p>Tap on a stock item to view more information.</p>
</div>

<div id="locations"></div>

<hr class="uk-margin-large">

<div>
    <h2>Locations</h2>
    <p>To change what warehouse location StockWise returns product data from, expand the menu and click on <b>Settings</b>.</p>
    <p>Under <b>Linnworks Location</b>, select the location you want to use.</p>
</div>

<div id="stockenquiry"></div>

<hr class="uk-margin-large">

<div>
    <h2>Stock Enquiry</h2>
    <p>To view and edit an existing stock item expand the menu and select <b>Stock Enquiry</b>.</p>
    <p>Search for an item and tap it to enter the item's enquiry page.</p>
    <p>Use the on screen controls to change important stock item information.</p>
    <p>The scan button can be used to enter new barcodes and bin/rack numbers.</p>
    <p>Use the plus &amp; minus buttons to change levels or just tap the field to enter a new value.</p>
    <p>Click the edit buttons to change prices, dimensions, item weight & supplier information.</p>
</div>

<div id="suppliers"></div>

<hr class="uk-margin-large">

<div>
    <h2>Suppliers</h2>
    <p>To view &amp; edit an item's supplier information, open the stock item's enquiry page.</p>
    <p>To add a new supplier from your list of suppliers in Linnworks, click the green <b>plus</b> button.</p>
    <p>To edit an existing supplier's information, click the <b>edit</b> button.</p>
    <p>Don't forget to save afterwards.</p>
    <p>To delete a supplier, click the <b>delete</b> button.</p>
    <p>Use the <b>Default</b> toggle to decide who will be your <b>main supplier</b> for this stock item.</p>
</div>

<div id="stockitemhistory"></div>

<hr class="uk-margin-large">

<div>
    <h2>Stock Item History</h2>
    <p>To view an item's stock level history, open the stock item's enquiry page.</p>
    <p>Scroll down to the <b>Stock Levels</b> section, and click <b>View Recent History</b>.</p>
    <p>This screen will show you all the times the item's stock level has changed in your current location, why it was changed, and by how many units.</p>
</div>

<div id="stockin"></div>

<hr class="uk-margin-large">

<div>
    <h2>Stock In</h2>
    <p>To book new stock into your Linnworks database, expand the menu and select <b>Stock In</b>.</p>
    <p>Search for an item.</p>
    <p>Tap the number field, and enter the amount you are booking in.</p>
    <p>Click the <b>Book In</b> button.</p>
    <p>If you have any purchase orders for the item, StockWise will show them to you.</p>
    <p>If you want to mark off any amount of your booked in value against an existing purchase order, click the <b>QTY</b> field, and enter the amount you want to book in against the purchase order.</p>
    <p>You can split the amount between multiple purchase orders if you need to.</p>
    <p>If you want to book stock in against a purchase order, click the <b>GREEN</b> button.</p>
    <p>If you <b>don't</b> want to book any stock in against the purchase order, and just want to book the stock in directly, click the <b>BLUE</b> button.</p>
</div>

<div id="stockcount"></div>

<hr class="uk-margin-large">

<div>
    <h2>Stock Count</h2>
    <p>To start a new stock count, open the menu and select stock count.</p>
    <p>Search for your first item to count. You can use the search bar, or your device's camera by tapping the <b>SCAN</b> button.</p>
    <p>For stock count to work, you have to provide an exact barcode or SKU.</p>
    <p>Select if you want to add a single unit per search/scan, or add multiple units.</p>
    <p>Selecting <b>Many</b> will ask you to enter an amount after each search or scan.</p>
    <p>To remove an item from your count, hit the rubbish bin button.</p>
    <p>To abort your entire count, click <b>Abort Count</b>.</p>
    <p>To Finish your count, click <b>Finish Count</b>.</p>
    <p>Stock counts <b>do not</b> adjust stock levels in real time. No stock levels will be changed until you have finished your count.</p>
</div>

<div id="purchaseorders"></div>

<hr class="uk-margin-large">

<div>
    <h2>Purchase Orders</h2>
    <p>To manage your existing purchase orders in StockWise, open the menu and select <b>Purchase Orders</b>.</p>
    <p>View a list of all your purchase orders, or search for a purchase order reference.</p>
    <p>You can filter your purchase orders by status by selecting <b>Open</b> or <b>Partial</b>.</p>
    <p>Once you have selected a purchase order, you will be able to see all the items that the order contains.</p>
    <p>You can search or scan an item barcode to mark it as delivered on the purchase order.</p>
    <p>Tap on the <b>Delivered</b> column to enter an amount for each stock item.</p>
    <p>Once you have finished editing your purchase order, click the '<b>Mark items as Delivered</b>' button</p>
</div>

<div id="permissions"></div>

<hr class="uk-margin-large">

<div>
    <h2>Admin Mode &amp; Permissions</h2>
    <p>To enable <b>Admin Mode</b> in StockWise, expand the menu at the top right hand corner of the screen, find the '<b>Toggle Admin Mode</b>' option and select enable. To find out more about Admin Mode, click here.</p>
    <p>Enter your Admin PIN.</p>
    <p>To turn off Admin Mode, expand the menu again, and disable the same setting.</p>
</div>

<div id="settings"></div>

<hr class="uk-margin-large">

<div>
    <h2>Settings</h2>
    <p>To open your StockWise settings, expand the menu and click <b>Settings</b>.</p>
    <p>If you are using a barcode scanner, you can enable the auto clear option to tell StockWise to remove all the text in the search field once you have finished using a screen. This is great for barcode scanners, as the field will be empty and ready to go the next time you want to scan something.</p>
    <p>When you search for an stock item in Stock Enquiry, and only one item is returned, you can choose to have StockWise immediately open the enquiry page for the item, instead of displaying the search results. You can turn this feature on individually for searching by SKU or barcode.</p>
    <p>When StockWise displays a list of stock items after a successful search or scan, it can display one piece of primary information.</p>
    <p>You can use this option to customise what data StockWise will show in this space, so you can have the most important information to hand as quickly as possible.</p>
    <p>To change what warehouse location StockWise returns product data from by using the location picker.</p>
</div>

<hr class="uk-margin-large-top"/>

<a class="uk-align-right" href="#" uk-totop uk-scroll></a>
</div>
</template>

<script>
export default {
  head() {
      return {
        title: 'StockWise'
      }
  }
}
</script>
