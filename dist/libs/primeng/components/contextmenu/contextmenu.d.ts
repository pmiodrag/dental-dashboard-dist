import { ElementRef, AfterViewInit, OnDestroy, Renderer } from '@angular/core';
import { DomHandler } from '../dom/domhandler';
import { MenuItem } from '../common';
import { Router } from '@angular/router';
export declare class ContextMenuSub {
    private domHandler;
    private router;
    item: MenuItem;
    root: boolean;
    constructor(domHandler: DomHandler, router: Router);
    activeItem: any;
    activeLink: any;
    onItemMouseEnter(event: any, item: any): void;
    onItemMouseLeave(event: any, link: any): void;
    itemClick(event: any, item: MenuItem): void;
    listClick(event: any): void;
}
export declare class ContextMenu implements AfterViewInit, OnDestroy {
    private el;
    private domHandler;
    private renderer;
    model: MenuItem[];
    global: boolean;
    style: any;
    styleClass: string;
    visible: boolean;
    left: number;
    top: number;
    container: any;
    documentClickListener: any;
    documentRightClickListener: any;
    constructor(el: ElementRef, domHandler: DomHandler, renderer: Renderer);
    ngAfterViewInit(): void;
    toggle(event: any): void;
    show(event: any): void;
    hide(): void;
    unsubscribe(item: any): void;
    ngOnDestroy(): void;
}
