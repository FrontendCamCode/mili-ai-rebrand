---
title: "MRO Reorder Quantity (ROQ) Calculation"
description: A plain-English guide to reorder quantity calculations for MRO teams.
publishedAt: 2024-07-29
author: Lexin Solutions
tags: [ROQ, stocking, inventory-optimisation]
---

Reorder quantity — how much to order each time stock falls to the reorder point — is one of the most consequential and least examined parameters in MRO inventory management. Most organisations set it once and forget it. The cost of that neglect compounds quietly in the form of excess inventory, premature stockouts, and suboptimal purchasing cycles.

## Why ROQ is different from ROP

Reorder point (ROP) tells you **when** to order. Reorder quantity (ROQ) tells you **how much** to order. The two are related but distinct, and confusing them is a common source of inventory problems.

ROP is primarily a function of lead time and demand variability — it's the safety net that ensures you don't run out before replenishment arrives. ROQ is a function of ordering cost, holding cost, and demand rate — it's the efficiency calculation that determines the optimal order size.

## The basic EOQ model

The Economic Order Quantity (EOQ) formula is the foundation:

**EOQ = √(2DS / H)**

Where:
- **D** = Annual demand (units per year)
- **S** = Ordering cost (cost per purchase order)
- **H** = Holding cost (cost to hold one unit for one year)

The formula balances two competing costs. Ordering in large quantities reduces the number of orders placed (lower ordering cost) but increases the average inventory held (higher holding cost). EOQ finds the minimum-cost intersection.

## Why EOQ needs adjustment for MRO

EOQ was designed for high-volume, steady-demand environments. MRO materials rarely fit this profile. A few adjustments are typically required:

**Lumpy demand.** Many MRO items are used infrequently — zero demand for months, then a significant draw during a planned shutdown. Averaging annual demand hides the lumpiness. For items with highly irregular demand, consider a demand-weighted approach or a minimum order quantity that ensures you're not ordering less than a sensible working quantity.

**Supplier minimums and packaging.** Suppliers often impose minimum order quantities or sell in fixed pack sizes. EOQ is a continuous function; actual order quantities are discrete. Always round to the nearest practical order quantity, not just the nearest whole number.

**Criticality adjustments.** For high-criticality items, the cost of a stockout is not captured in the standard EOQ model. A criticality premium — holding additional inventory beyond the EOQ-derived quantity — can be justified by the cost of unavailability.

**Shelf life.** Some MRO materials degrade over time. Seals, belts, and certain chemicals have practical shelf lives. Ordering in large quantities to minimise ordering cost doesn't make sense if the excess stock will be condemned before it's used.

## A practical approach

For most MRO operations, a simplified version of the EOQ calculation — using average annual demand, an estimated ordering cost of $50–200 per order, and a holding cost of 20–30% of item value per year — produces reasonable results as a starting point. The key discipline is reviewing and updating the parameters annually.

Ordering cost and holding cost are often the least accurate inputs. Ordering cost should include buyer time, approval processing, goods receipt, and invoice matching — not just the transactional fee. Holding cost should include capital cost, warehouse space, insurance, and obsolescence risk.

Getting ROQ right won't transform an operation overnight. But getting it consistently wrong — across thousands of stocked items — is one of the least visible and most persistent drains on MRO working capital.
