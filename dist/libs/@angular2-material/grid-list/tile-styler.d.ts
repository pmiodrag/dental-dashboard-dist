import { Dir } from '@angular2-material/core/rtl/dir';
export declare class TileStyler {
    _gutterSize: string;
    _rows: number;
    _rowspan: number;
    _cols: number;
    _dir: Dir;
}
export declare class FixedTileStyler extends TileStyler {
    fixedRowHeight: string;
    constructor(fixedRowHeight: string);
}
export declare class RatioTileStyler extends TileStyler {
    /** Ratio width:height given by user to determine row height.*/
    rowHeightRatio: number;
    baseTileHeight: string;
    constructor(value: string);
}
export declare class FitTileStyler extends TileStyler {
}
